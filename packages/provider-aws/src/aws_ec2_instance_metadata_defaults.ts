import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2InstanceMetadataDefaultsArgs {}
export class aws_ec2_instance_metadata_defaults extends TerraformResource {
  readonly http_endpoint?: string;
  readonly http_put_response_hop_limit?: number;
  readonly http_tokens?: string;
  readonly id!: string;
  readonly instance_metadata_tags?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2InstanceMetadataDefaultsArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_instance_metadata_defaults");
  }
}