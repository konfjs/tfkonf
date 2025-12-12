# tfkonf

Terraform / OpenTofu in Typescript. Like CDKTF but simpler.

## ⚠️ CDKTF deprecation

CDKTF was officially deprecated on Dec 10, 2025. <https://github.com/hashicorp/terraform-cdk/pull/3949>

I believe there is a genuine need for an alternative for people who preferred CDKTF's approach of using familiar programming languages to define infrastructure as code. I will be maintaining this project to provide a simpler and more focused alternative to CDKTF.

For now, tfkonf is focused on TypeScript, but I may consider adding support for other languages in the future based on demand. If you are interested in contributing to this effort, please reach out!

This library is currently in early development. Not every feature of Terraform is supported yet. Please open issues or PRs for any missing features you need.

**Contributions are welcome!**

---

## Concepts

`@tfkonf/core` - Core library that provides the basic building blocks for creating Terraform configurations.
For example, `TerraformConfig` - Represents a Terraform configuration file. Each Terraform resource must belong to a `TerraformConfig`.

`@tfkonf/provider-<provider>` - Provider libraries that provide resources for a specific Terraform provider. Example: `@tfkonf/provider-google` provides resources for Google Cloud Platform.

`@tfkonf/provider-generator` - CLI tool that generates Typescript code from Terraform provider schemas.

## Example

Input

```ts
import { Provider, Terraform, TerraformConfig } from '@tfkonf/core';
import { google_service_account } from '@tfkonf/provider-google/google_service_account';

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
