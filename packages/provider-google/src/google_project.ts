import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleProjectArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleProjectArgs {
  auto_create_network?: boolean;
  billing_account?: string;
  deletion_policy?: string;
  folder_id?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  org_id?: string;
  project_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: GoogleProjectArgsTimeouts;
}
export class google_project extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly number!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectArgs) {
    super(config, "resource", args, resourceName, "google_project");
  }
}