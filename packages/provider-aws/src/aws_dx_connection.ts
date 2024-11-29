import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDxConnectionArgs {
  bandwidth: string;
  location: string;
  name: string;
  request_macsec?: boolean;
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_dx_connection extends TerraformResource {
  readonly arn!: string;
  readonly aws_device!: string;
  readonly encryption_mode?: string;
  readonly has_logical_redundancy!: string;
  readonly id?: string;
  readonly jumbo_frame_capable!: boolean;
  readonly macsec_capable!: boolean;
  readonly owner_account_id!: string;
  readonly partner_name!: string;
  readonly port_encryption_status!: string;
  readonly provider_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vlan_id!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_dx_connection");
  }
}