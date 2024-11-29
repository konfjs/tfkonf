import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxLagArgs {
  connection_id?: string;
  connections_bandwidth: string;
  force_destroy?: boolean;
  location: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_dx_lag extends TerraformResource {
  readonly arn!: string;
  readonly has_logical_redundancy!: string;
  readonly id?: string;
  readonly jumbo_frame_capable!: boolean;
  readonly owner_account_id!: string;
  readonly provider_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxLagArgs) {
    super(config, "resource", args, resourceName, "aws_dx_lag");
  }
}