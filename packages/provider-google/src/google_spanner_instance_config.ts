import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerInstanceConfigArgsreplicas {
  default_leader_location?: boolean;
  location?: string;
  type?: string;
}
export interface GoogleSpannerInstanceConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSpannerInstanceConfigArgs {
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  replicas: GoogleSpannerInstanceConfigArgsreplicas;
  timeouts: GoogleSpannerInstanceConfigArgstimeouts;
}
export class google_spanner_instance_config extends TerraformResource {
  readonly base_config?: string;
  readonly config_type!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerInstanceConfigArgs) {
    super(config, "resource", args, resourceName, "google_spanner_instance_config");
  }
}