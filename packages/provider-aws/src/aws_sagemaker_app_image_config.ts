import { TerraformConfig, TerraformResource } from "tfs";
export interface ContainerConfig {
  container_arguments?: string[];
  container_entrypoint?: string[];
  container_environment_variables?: {
    [key: string]: string;
  };
}
export interface FileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}
export interface CodeEditorAppImageConfig {
  container_config: ContainerConfig;
  file_system_config: FileSystemConfig;
}
export interface ContainerConfig {
  container_arguments?: string[];
  container_entrypoint?: string[];
  container_environment_variables?: {
    [key: string]: string;
  };
}
export interface FileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}
export interface JupyterLabImageConfig {
  container_config: ContainerConfig;
  file_system_config: FileSystemConfig;
}
export interface FileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}
export interface KernelSpec {
  display_name?: string;
  name: string;
}
export interface KernelGatewayImageConfig {
  file_system_config: FileSystemConfig;
  kernel_spec: KernelSpec;
}
export interface AwsSagemakerAppImageConfigArgs {
  app_image_config_name: string;
  tags?: {
    [key: string]: string;
  };
  code_editor_app_image_config: CodeEditorAppImageConfig;
  jupyter_lab_image_config: JupyterLabImageConfig;
  kernel_gateway_image_config: KernelGatewayImageConfig;
}
export class aws_sagemaker_app_image_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerAppImageConfigArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_app_image_config");
  }
}