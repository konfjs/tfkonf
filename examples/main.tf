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