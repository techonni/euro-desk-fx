# Push notes — Euro Desk FX site

Remote: https://github.com/techonni/euro-desk-fx  
Pages URL (expected): https://techonni.github.io/euro-desk-fx/

Run from this directory (`/workspace/euro-desk-fx` on the box, or your local clone).

## Preferred: normal push (pull README first)

```bash
cd /workspace/euro-desk-fx   # or your local path

git init
git checkout -b main

git remote add origin https://github.com/techonni/euro-desk-fx.git
# if remote already exists:
# git remote set-url origin https://github.com/techonni/euro-desk-fx.git

# Pull any existing README / license without overwriting local site files blindly
git fetch origin
git pull origin main --allow-unrelated-histories --no-rebase || true
# Resolve conflicts if GitHub README conflicts; keep local site files.

git add .
git status
git commit -m "Add Astro static site for Euro Desk FX (GitHub Pages)"

git push -u origin main
```

## Only if history diverged and a normal push is rejected

Prefer fixing with pull/rebase first. If you intentionally replace remote history:

```bash
git push --force-with-lease origin main
```

Do **not** use bare `--force` unless you fully understand you may overwrite remote commits.

## After push

1. Repo **Settings → Pages**: Source = **GitHub Actions**.
2. Confirm workflow **Deploy to GitHub Pages** succeeds on `main`.
3. Open https://techonni.github.io/euro-desk-fx/
