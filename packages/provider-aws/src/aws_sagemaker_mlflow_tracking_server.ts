import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerMlflowTrackingServerArgs {
  artifact_store_uri: string;
  automatic_model_registration?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  tracking_server_name: string;
  tracking_server_size?: string;
}

export class aws_sagemaker_mlflow_tracking_server extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly mlflow_version?: string;
  readonly tags_all?: { [key: string]: string };
  readonly tracking_server_url!: string;
  readonly weekly_maintenance_window_start?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerMlflowTrackingServerArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_mlflow_tracking_server");
  }
}
