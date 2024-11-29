import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSfnAliasArgsRoutingConfiguration {
  state_machine_version_arn: string;
  weight: number;
}
export interface AwsSfnAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSfnAliasArgs {
  description?: string;
  name: string;
  routing_configuration: AwsSfnAliasArgsRoutingConfiguration;
  timeouts?: AwsSfnAliasArgsTimeouts;
}
export class aws_sfn_alias extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSfnAliasArgs) {
    super(config, "resource", args, resourceName, "aws_sfn_alias");
  }
}