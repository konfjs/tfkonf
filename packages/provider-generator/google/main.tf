terraform {
  backend "local" {}

  required_version = ">= 1.9.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.12.0"
    }
  }
}
