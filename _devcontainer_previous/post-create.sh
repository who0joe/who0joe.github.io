#!/bin/sh
# 동작을 안하는것 같음 뭐가 문제인지
FILE_PATH="../jekyll/"

# Install the version of Bundler.
if [ -f ${FILE_PATH}Gemfile.lock ] && grep "BUNDLED WITH" ${FILE_PATH}Gemfile.lock > /dev/null; then
    cat ${FILE_PATH}Gemfile.lock | tail -n 2 | grep -C2 "BUNDLED WITH" | tail -n 1 | xargs gem install bundler -v
fi

# # If there's a Gemfile, then run `bundle install`
# # It's assumed that the Gemfile will install Jekyll too
if [ -f ${FILE_PATH}Gemfile ]; then
    bundle install
fi

cd ./jekyll/
