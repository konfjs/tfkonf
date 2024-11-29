import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectInstanceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsConnectInstanceArgs {
  auto_resolve_best_voices_enabled?: boolean;
  contact_flow_logs_enabled?: boolean;
  contact_lens_enabled?: boolean;
  directory_id?: string;
  early_media_enabled?: boolean;
  identity_management_type: string;
  inbound_calls_enabled: boolean;
  instance_alias?: string;
  multi_party_conference_enabled?: boolean;
  outbound_calls_enabled: boolean;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsConnectInstanceArgsTimeouts;
}
export class aws_connect_instance extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly id?: string;
  readonly service_role!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_connect_instance");
  }
}