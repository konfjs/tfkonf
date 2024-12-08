resource "google_access_context_manager_access_levels" "foo" {
  parent = "awd"
  access_levels {
    name  = "fooo"
    title = "barrr"
    basic {
      conditions {
        device_policy {
          allowed_device_management_levels = ["HIGH"]
          require_admin_approval           = true
        }
        ip_subnetworks = ["foo"]
      }
    }
    custom {
      expr {
        expression = "foo"
      }
    }
  }
}

terraform {
  backend "remote" {
    hostname     = app.terraform.io
    organization = "my-org"
    workspaces = {
      name = "my-workspace"
    }
  }
  provider_meta "google" {
    foo = "bar"
  }
  provider_meta "google-beta" {
    foo2 = "bar2"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.43.0"
    }
    hcp = {
      source  = "hashicorp/hcp"
      version = ">= 0.18.0"
    }
  }
  cloud {
    workspaces {
      name    = "my-workspace"
      project = "my-project"
      tags    = ["foo", "bar"]
    }
    hostname     = app.terraform.io
    organization = "my-org"
    token        = "foo"
  }
}

resource "google_alloydb_cluster" "my-cluster" {
  cluster_id = "foo"
  location   = "us-central1"
}

resource "google_service_account" "my-service-account" {
  account_id  = "foo"
  description = google_alloydb_cluster.my-cluster.location
  timeouts {
    create = "10m"
  }
}

data "google_service_account" "my-service-account-data" {
  account_id = "foo"
}

resource "google_project_iam_member" "my-iam-member" {
  project = "my-project"
  role    = "roles/iam.Admin2"
  member  = data.google_service_account.my-service-account-data.member
}

resource "google_service_account_iam_member" "my-iam-member" {
  service_account_id = google_service_account.my-service-account.account_id
  role               = "roles/iam.Admin"
  member             = "group:foo@bar.com"
}

locals {
  foooooooooo = "bar"
  bazzzzz = {
    foo22222 = "bar2"
  }
}

variable "cluster_name22" {
  type    = list(string)
  default = ["foo", "bar"]
  validation {
    condition     = true
    error_message = "foo"
  }
}

import {
  id = "my-cluster"
  to = google_container_cluster.my-cluster.name
}