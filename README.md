# Github action for setting variables based on provided branch name

A simple github action that allows to conditionally set variables based on the provided branch name

## Usage

```yaml
name: "Use env"
on:
  workflow_dispatch:

jobs:
  use-env:
    runs-on: "ubuntu-latest"
    steps:
      - uses: actions/checkout@v4
      - name: Setup variables based on branch
        id: get_vars
        uses: ingka-group-digital/use-env
        with:
          branch: ${{github.ref == 'refs/heads/main' && 'prod' || github.ref == 'refs/heads/demo' && 'demo' || github.ref == 'refs/heads/dev' && 'dev'}}
          variables: |
            - branch: prod
              VAR_X: PRODUCTION-STUFF
              VAR_Y: 123

            - branch: dev
              VAR_X: DEV-STUFF
              VAR_Y: 42

            - branch: demo
              VAR_X: DEMO-VAR
              VAR_Y: 99
      - name: Use outputs
        run: |
          echo "Output VAR_X: ${{ steps.get_vars.outputs.VAR_X }}"
          echo "Output VAR_Y: ${{ steps.get_vars.outputs.VAR_Y }}"
```
