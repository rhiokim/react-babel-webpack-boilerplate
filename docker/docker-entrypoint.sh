#!/bin/bash

####################################################
# Sets configuration-values based on environment variables when the
# Docker container starts
####################################################

set -e
echo "run entrypoint.sh $@"

if [ "$1" = 'nginx' ]; then

  echo
  echo "Set Values based on Enviroment Variables"
  echo

  exec "$@"
fi

exec "$@"