import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleResourceManagerLienArgs {
  origin: string;
  parent: string;
  reason: string;
  restrictions: string[];
  timeouts: Timeouts;
}
export class google_resource_manager_lien extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleResourceManagerLienArgs) {
    super(config, "resource", args, resourceName, "google_resource_manager_lien");
  }
}