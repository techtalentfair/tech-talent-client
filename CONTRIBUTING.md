# Branches Naming 🌿

Branch names should follow a structured format like:

**(Task Type / Feature Name / Jira Ticket Number - SubTask)**  

### Examples:
- `Feature/navbar/TT-101-navbar-refactor`
- `Bugfix/auth/TT-204-login-issue`
- `Chore/deps/TT-305-update-react`

### Breakdown:
1. **Task Type** → (Feature, Bugfix, Refactor, Hotfix, chore)
2. **Feature Name** → The main feature being worked on.
3. **Jira Ticket Number** → Helps track commits in Jira.
4. **SubTask** → Specifies the area affected, e.g., UI, logic, API.

<br/>
<br/>

---
<br/>
<br/>

# Git Commit Messages 🔗

Git commit messages should help reviewers to do better reviews.

- Write short messages (72 characters or less)
- Use the present tense
- Use the imperative mood
- Start your commit with feat(component_Name) and :emoji-to-use: to make the nature of your commit clear.

## Preferred ✅ :
- `Feature(navbar) 🎨 Improve UI structure for responsiveness.`
- `Bugfix(auth) 🐛 Resolve login state persistence issue.`
- `Chore(deps) ⬆️ Upgrade React version.`

## Not Preferred ⚠️:
- Improve UI structure.
- Resolve login issue.
- Upgrade dependencies.


# Commit Nature 📌

Emojis should help reviewers to quickly and visually identify the nature of the commit.

For clear visual identification, start the commit message with an applicable emoji:

🎨 `:art:` Improving structure/format of the code.  
⚡ `:zap:` Improving performance.  
🔥 `:fire:` Removing code or files.  
🐛 `:bug:` Fixing a bug.  
🚑 `:ambulance:` Critical hotfix.  
✨ `:sparkles:` Introducing new features.  
📝 `:memo:` Writing documentation.  
🚀 `:rocket:` Updating UI components and styles.  
🔒 `:lock:` Fixing security issues.  
✅ `:white_check_mark:` Releasing/version tags.  
🔨 `:construction:` Work in progress.  
💚 `:green_heart:` Fixing CI Build.  
⬇️ `:arrow_down:` Downgrading dependencies.  
⬆️ `:arrow_up:` Upgrading dependencies.  
👷 `:construction_worker:` Adding CI build system.  
📈 `:chart_with_upwards_trend:` Adding analytics/tracking code.  
♻️ `:recycle:` Refactoring code.  
➖ `:heavy_minus_sign:` Removing a dependency.  
➕ `:heavy_plus_sign:` Adding a dependency.  
🔧 `:wrench:` Changing configuration files.  
🌐 `:globe_with_meridians:` Internationalization/localization.  
⏪ `:rewind:` Reverting changes.  
👌 `:ok_hand:` Updating code after code review.  
🏗 `:building_construction:` Making architectural changes.  


### 🎯 Purpose of These Guidelines
- Improve project clarity and ease of tracking changes.
- Make code reviews faster and more efficient.
- Ensure consistency within the team and avoid random naming chaos.


---
🔹 **For the Arabic version of this guide, check out** [CONTRIBUTING-ar.md](./CONTRIBUTING-ar.md)
