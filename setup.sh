# git config --global init.defaultBranch main
# git init
# git config --global user.name "James Womack"
# git config --global user.email james@womack.io
nvm use
corepack enable
pnpm install
pnpm run test:read-in-project
