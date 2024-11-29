terraform {
  backend "local" {}

  required_version = ">= 1.9.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.12.0"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "5.78.0"
    }
  }
}
