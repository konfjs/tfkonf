import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerNotebookInstanceArgsInstanceMetadataServiceConfiguration {}
export interface AwsSagemakerNotebookInstanceArgs {
  accelerator_types?: string[];
  additional_code_repositories?: string[];
  default_code_repository?: string;
  direct_internet_access?: string;
  instance_type: string;
  kms_key_id?: string;
  lifecycle_config_name?: string;
  name: string;
  role_arn: string;
  root_access?: string;
  subnet_id?: string;
  tags?: {
    [key: string]: string;
  };
  volume_size?: number;
  instance_metadata_service_configuration: AwsSagemakerNotebookInstanceArgsInstanceMetadataServiceConfiguration;
}
export class aws_sagemaker_notebook_instance extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly network_interface_id!: string;
  readonly platform_identifier?: string;
  readonly security_groups?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerNotebookInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_notebook_instance");
  }
}