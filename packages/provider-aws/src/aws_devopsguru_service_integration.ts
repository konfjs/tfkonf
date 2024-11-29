import { TerraformConfig, TerraformResource } from "tfs";
export interface KmsServerSideEncryption {}
export interface LogsAnomalyDetection {}
export interface OpsCenter {}
export interface AwsDevopsguruServiceIntegrationArgs {
  kms_server_side_encryption: KmsServerSideEncryption;
  logs_anomaly_detection: LogsAnomalyDetection;
  ops_center: OpsCenter;
}
export class aws_devopsguru_service_integration extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDevopsguruServiceIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_devopsguru_service_integration");
  }
}