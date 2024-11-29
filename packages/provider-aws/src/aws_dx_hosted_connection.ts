import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxHostedConnectionArgs {
  bandwidth: string;
  connection_id: string;
  name: string;
  owner_account_id: string;
  vlan: number;
}
export class aws_dx_hosted_connection extends TerraformResource {
  readonly aws_device!: string;
  readonly has_logical_redundancy!: string;
  readonly id?: string;
  readonly jumbo_frame_capable!: boolean;
  readonly lag_id!: string;
  readonly loa_issue_time!: string;
  readonly location!: string;
  readonly partner_name!: string;
  readonly provider_name!: string;
  readonly region!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_connection");
  }
}