import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfigContainerConfig {
  container_arguments?: string[];
  container_entrypoint?: string[];
  container_environment_variables?: { [key: string]: string };
}

export interface AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfigFileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}

export interface AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfig {
  container_config: AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfigContainerConfig;
  file_system_config: AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfigFileSystemConfig;
}

export interface AwsSagemakerAppImageConfigArgsJupyterLabImageConfigContainerConfig {
  container_arguments?: string[];
  container_entrypoint?: string[];
  container_environment_variables?: { [key: string]: string };
}

export interface AwsSagemakerAppImageConfigArgsJupyterLabImageConfigFileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}

export interface AwsSagemakerAppImageConfigArgsJupyterLabImageConfig {
  container_config: AwsSagemakerAppImageConfigArgsJupyterLabImageConfigContainerConfig;
  file_system_config: AwsSagemakerAppImageConfigArgsJupyterLabImageConfigFileSystemConfig;
}

export interface AwsSagemakerAppImageConfigArgsKernelGatewayImageConfigFileSystemConfig {
  default_gid?: number;
  default_uid?: number;
  mount_path?: string;
}

export interface AwsSagemakerAppImageConfigArgsKernelGatewayImageConfigKernelSpec {
  display_name?: string;
  name: string;
}

export interface AwsSagemakerAppImageConfigArgsKernelGatewayImageConfig {
  file_system_config: AwsSagemakerAppImageConfigArgsKernelGatewayImageConfigFileSystemConfig;
  kernel_spec: AwsSagemakerAppImageConfigArgsKernelGatewayImageConfigKernelSpec;
}

export interface AwsSagemakerAppImageConfigArgs {
  app_image_config_name: string;
  tags?: { [key: string]: string };
  code_editor_app_image_config: AwsSagemakerAppImageConfigArgsCodeEditorAppImageConfig;
  jupyter_lab_image_config: AwsSagemakerAppImageConfigArgsJupyterLabImageConfig;
  kernel_gateway_image_config: AwsSagemakerAppImageConfigArgsKernelGatewayImageConfig;
}

export class aws_sagemaker_app_image_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerAppImageConfigArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_app_image_config");
  }
}
