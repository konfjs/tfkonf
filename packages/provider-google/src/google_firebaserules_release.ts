import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirebaserulesReleaseArgs {
  name: string;
  ruleset_name: string;
  timeouts: Timeouts;
}
export class google_firebaserules_release extends TerraformResource {
  readonly create_time!: string;
  readonly disabled!: boolean;
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaserulesReleaseArgs) {
    super(config, "resource", args, resourceName, "google_firebaserules_release");
  }
}