# [Choice] Debian OS version (use bullseye on local arm64/Apple Silicon): bullseye, buster
ARG VARIANT=bullseye
FROM mcr.microsoft.com/vscode/devcontainers/jekyll:0-${VARIANT}

## [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
# ARG NODE_VERSION="none"
# RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git

RUN git config --system --add safe.directory /workspaces/who0joe.github.io; \
    git config --system core.ignorecase false; \
 	git config --system core.autocrlf true
    # git config user.name "<user_name>"
    # git config user.email "<user_email>"

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1