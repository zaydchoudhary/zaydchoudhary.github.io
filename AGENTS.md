<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this portfolio as a single index route with anchor navigation; the content is one continuous experience.
- Keep resume-backed copy and skill names in separate typed data modules; every listed skill must stay backed by an experience row.
- Define portfolio styling in the global semantic token system and expose interactive treatments through Button variants; consistent styling must not depend on local color overrides.
- Represent missing external profile and resume destinations as unavailable, not fabricated links; only supplied destinations may be navigable.
- Render projects through the shared typed experience-row model and preserve entry IDs when moving sections.
- Keep the skills section static plain text built from the typed skills module; no chips, buttons, hover or click highlighting.
- Omit external profile links without supplied URLs; empty destinations must never appear as disabled contact placeholders.
