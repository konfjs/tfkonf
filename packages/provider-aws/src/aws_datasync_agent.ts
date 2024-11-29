import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatasyncAgentArgsTimeouts {
  create?: string;
}
export interface AwsDatasyncAgentArgs {
  name?: string;
  security_group_arns?: string[];
  subnet_arns?: string[];
  tags?: {
    [key: string]: string;
  };
  vpc_endpoint_id?: string;
  timeouts: AwsDatasyncAgentArgsTimeouts;
}
export class aws_datasync_agent extends TerraformResource {
  readonly activation_key?: string;
  readonly arn!: string;
  readonly id?: string;
  readonly ip_address?: string;
  readonly private_link_endpoint?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncAgentArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_agent");
  }
}