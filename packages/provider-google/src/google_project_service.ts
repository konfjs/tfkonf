import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleProjectServiceArgs {
  disable_dependent_services?: boolean;
  disable_on_destroy?: boolean;
  service: string;
  timeouts: Timeouts;
}
export class google_project_service extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectServiceArgs) {
    super(config, "resource", args, resourceName, "google_project_service");
  }
}