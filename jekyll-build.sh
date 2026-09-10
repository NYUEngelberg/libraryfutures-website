#!/bin/bash

bundle exec jekyll contentful --config $JEKYLL_CONFIG_FILENAME && bundle exec jekyll build --config $JEKYLL_CONFIG_FILENAME

