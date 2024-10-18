name: CI

on:
  pull_request:
  push:
    branches:
      - master

concurrency:
  group: ${{ github.ref_name }}-${{ github.workflow }}
  cancel-in-progress: true

jobs:
  rubocop:
    name: Rubocop
    uses: theforeman/actions/.github/workflows/rubocop.yml@v0
    with:
      command: bundle exec rubocop --parallel --format github

  test:
    name: Ruby
    needs: rubocop
    uses: theforeman/actions/.github/workflows/foreman_plugin.yml@v0
    with:
      plugin: foreman_plugin_template
