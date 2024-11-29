import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpclatticeListenerArgsDefaultActionFixedResponse {
  status_code: number;
}
export interface AwsVpclatticeListenerArgsDefaultActionforwardTargetGroups {
  target_group_identifier?: string;
  weight?: number;
}
export interface AwsVpclatticeListenerArgsDefaultActionforward {
  target_groups: AwsVpclatticeListenerArgsDefaultActionforwardTargetGroups;
}
export interface AwsVpclatticeListenerArgsDefaultAction {
  fixed_response: AwsVpclatticeListenerArgsDefaultActionFixedResponse;
  forward: AwsVpclatticeListenerArgsDefaultActionforward;
}
export interface AwsVpclatticeListenerArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeListenerArgs {
  name: string;
  protocol: string;
  tags?: {
    [key: string]: string;
  };
  default_action: AwsVpclatticeListenerArgsDefaultAction;
  timeouts: AwsVpclatticeListenerArgstimeouts;
}
export class aws_vpclattice_listener extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly last_updated_at!: string;
  readonly listener_id!: string;
  readonly port?: number;
  readonly service_arn?: string;
  readonly service_identifier?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeListenerArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_listener");
  }
}