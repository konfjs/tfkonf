import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsImagebuilderContainerRecipeArgsComponentParameter {
  name: string;
  value: string;
}
export interface AwsImagebuilderContainerRecipeArgsComponent {
  component_arn: string;
  parameter: AwsImagebuilderContainerRecipeArgsComponentParameter;
}
export interface AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMappingEbs {
  delete_on_termination?: string;
  encrypted?: string;
  iops?: number;
  kms_key_id?: string;
  snapshot_id?: string;
  throughput?: number;
  volume_size?: number;
  volume_type?: string;
}
export interface AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMapping {
  device_name?: string;
  virtual_name?: string;
  ebs: AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMappingEbs;
}
export interface AwsImagebuilderContainerRecipeArgsInstanceConfiguration {
  image?: string;
  block_device_mapping: AwsImagebuilderContainerRecipeArgsInstanceConfigurationBlockDeviceMapping;
}
export interface AwsImagebuilderContainerRecipeArgsTargetRepository {
  repository_name: string;
  service: string;
}
export interface AwsImagebuilderContainerRecipeArgs {
  container_type: string;
  description?: string;
  dockerfile_template_uri?: string;
  kms_key_id?: string;
  name: string;
  parent_image: string;
  platform_override?: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  working_directory?: string;
  component: AwsImagebuilderContainerRecipeArgsComponent;
  instance_configuration: AwsImagebuilderContainerRecipeArgsInstanceConfiguration;
  target_repository: AwsImagebuilderContainerRecipeArgsTargetRepository;
}
export class aws_imagebuilder_container_recipe extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly dockerfile_template_data?: string;
  readonly encrypted!: boolean;
  readonly id?: string;
  readonly owner!: string;
  readonly platform!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderContainerRecipeArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_container_recipe");
  }
}