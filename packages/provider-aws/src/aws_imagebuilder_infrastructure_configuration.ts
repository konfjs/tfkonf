import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsImagebuilderInfrastructureConfigurationArgsInstanceMetadataOptions {
  http_put_response_hop_limit?: number;
  http_tokens?: string;
}
export interface AwsImagebuilderInfrastructureConfigurationArgsLoggingS3Logs {
  s3_bucket_name: string;
  s3_key_prefix?: string;
}
export interface AwsImagebuilderInfrastructureConfigurationArgsLogging {
  s3_logs: AwsImagebuilderInfrastructureConfigurationArgsLoggingS3Logs;
}
export interface AwsImagebuilderInfrastructureConfigurationArgs {
  description?: string;
  instance_profile_name: string;
  instance_types?: string[];
  key_pair?: string;
  name: string;
  resource_tags?: {
    [key: string]: string;
  };
  security_group_ids?: string[];
  sns_topic_arn?: string;
  subnet_id?: string;
  tags?: {
    [key: string]: string;
  };
  terminate_instance_on_failure?: boolean;
  instance_metadata_options: AwsImagebuilderInfrastructureConfigurationArgsInstanceMetadataOptions;
  logging: AwsImagebuilderInfrastructureConfigurationArgsLogging;
}
export class aws_imagebuilder_infrastructure_configuration extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly date_updated!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderInfrastructureConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_infrastructure_configuration");
  }
}