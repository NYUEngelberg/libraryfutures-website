#!/bin/bash

bundle exec jekyll --config $JEKYLL_CONFIG_FILE contentful && bundle exec jekyll --config $JEKYLL_CONFIG_FILE build --trace
