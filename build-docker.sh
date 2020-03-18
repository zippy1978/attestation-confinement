#!/bin/sh
TAG=attestation-confinement:latest

# Build app
npm run-script build

docker build -t $TAG --no-cache --rm=true .

