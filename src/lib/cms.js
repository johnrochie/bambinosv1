import { createClient } from '@supabase/supabase-js'

/**
 * Plain anon-key client, no auth, no cookies — the exact pattern
 * evomedia-cms's own `/preview` proof page uses, since that page exists
 * specifically to show what a real client site's own codebase should do
 * (see that repo's SCOPE.md). `pages` has a public-read RLS policy for
 * this reason: this site is meant to read its own content unauthenticated.
 */
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

/** Known at deploy time (an env var), not resolved by slug at request
 * time — `sites` has no public-read policy (it holds contact_email), so
 * a real client site was never going to look itself up by slug anyway. */
const SITE_ID = import.meta.env.VITE_CMS_SITE_ID

/**
 * Fetches the "home" page's content blob. Returns `{ content: null,
 * error }` rather than throwing — HomePage decides how to degrade
 * (loading skeleton, error state with a booking fallback), this just
 * reports what happened.
 */
export async function fetchHomeContent() {
  if (!SITE_ID) {
    return { content: null, error: new Error('VITE_CMS_SITE_ID is not set') }
  }

  const { data, error } = await supabase
    .from('pages')
    .select('content')
    .eq('site_id', SITE_ID)
    .eq('slug', 'home')
    .maybeSingle()

  if (error) return { content: null, error }
  if (!data) return { content: null, error: new Error('No "home" page found for this site') }
  return { content: data.content, error: null }
}
