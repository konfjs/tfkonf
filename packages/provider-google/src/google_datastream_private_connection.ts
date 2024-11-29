import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcPeeringConfig {
  subnet: string;
  vpc: string;
}
export interface GoogleDatastreamPrivateConnectionArgs {
  create_without_validation?: boolean;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  private_connection_id: string;
  timeouts: Timeouts;
  vpc_peering_config: VpcPeeringConfig;
}
export class google_datastream_private_connection extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly error!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatastreamPrivateConnectionArgs) {
    super(config, "resource", args, resourceName, "google_datastream_private_connection");
  }
}