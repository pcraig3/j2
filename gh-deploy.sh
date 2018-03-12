#!/bin/sh
if [ -n "$(git status --porcelain)" ]
then
  echo "Error: cannot deploy until all changes are committed."
  exit 1
# else
#   echo "no changes";
fi

npm run be # build and export static html files
git add .
git commit -m "build and export static html files"
git subtree split --prefix out -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
# git reset --hard HEAD~1 # remove the commit where the static html was exported. we don't need this in the history
