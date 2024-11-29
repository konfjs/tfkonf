# tfkonf

Terraform / OpenTofu in Typescript. Like CDKTF but simpler.

## Concepts

`@konfjs/core` - Core library that provides the basic building blocks for creating Terraform configurations.
For example, `TerraformConfig` - Represents a Terraform configuration file. Each Terraform resource must belong to a `TerraformConfig`.

`@konfjs/provider-<provider>` - Provider libraries that provide resources for a specific Terraform provider. Example: `@konfjs/provider-google` provides resources for Google Cloud Platform.

`@konfjs/provider-generator` - CLI tool that generates Typescript code from Terraform provider schemas.

## Example

Input

```ts
import { Provider, Terraform, TerraformConfig } from '@konfjs/core';
import { google_service_account } from '@konfjs/provider-google/google_service_account';

const main = new TerraformConfig('main.tf');

new google_service_account(main, 'my_service_account', {
    account_id: 'my-service-account',
});

new Terraform(main, {
    backend: {
        gcs: {
            bucket: 'my-bucket',
            prefix: 'terraform/state',
        },
    },
    required_version: '>= 1.9.0',
    required_providers: {
        google: {
            source: 'hashicorp/google',
            version: '6.12.0',
        },
    },
});

new Provider(main, 'google', {
    project: 'foo',
    region: 'us-west1',
});

main.save();
```

Output

```terraform
resource "google_service_account" "my_service_account" {
  account_id = "my-service-account"
}

terraform {
  backend "gcs" {
    bucket = "my-bucket"
    prefix = "terraform/state"
  }
  required_version = ">= 1.9.0"
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "6.12.0"
    }
  }
}

provider "google" {
  project = "foo"
  region = "us-west1"
}
```
