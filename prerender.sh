#!/bin/bash
for f in src/pages/*.html; do
    page=`basename ${f%.*}`
    page=$(tr '[:upper:]' '[:lower:]' <<< ${page})
    if [ "$page" != 'home' ]; then
        rm -rf "public/$page"
        mkdir "public/$page"
        cp public/index.html "public/$page/index.html"
    fi
done