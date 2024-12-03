import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleProjectServiceArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleProjectServiceArgs {
  disable_dependent_services?: boolean;
  disable_on_destroy?: boolean;
  service: string;
  timeouts?: GoogleProjectServiceArgsTimeouts;
}
export class google_project_service extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectServiceArgs) {
    super(config, "resource", args, resourceName, "google_project_service");
  }
}