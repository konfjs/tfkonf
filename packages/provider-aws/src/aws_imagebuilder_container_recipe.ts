import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameter {
  name: string;
  value: string;
}
export interface Component {
  component_arn: string;
  parameter: Parameter;
}
export interface Ebs {
  delete_on_termination?: string;
  encrypted?: string;
  iops?: number;
  kms_key_id?: string;
  snapshot_id?: string;
  throughput?: number;
  volume_size?: number;
  volume_type?: string;
}
export interface BlockDeviceMapping {
  device_name?: string;
  virtual_name?: string;
  ebs: Ebs;
}
export interface InstanceConfiguration {
  image?: string;
  block_device_mapping: BlockDeviceMapping;
}
export interface TargetRepository {
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
  component: Component;
  instance_configuration: InstanceConfiguration;
  target_repository: TargetRepository;
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