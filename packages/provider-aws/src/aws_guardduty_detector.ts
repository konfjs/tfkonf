import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGuarddutyDetectorArgsDatasourcesKubernetesAuditLogs {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsDatasourcesKubernetes {
  audit_logs: AwsGuarddutyDetectorArgsDatasourcesKubernetesAuditLogs;
}
export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}
export interface AwsGuarddutyDetectorArgsDatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyDetectorArgsDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}
export interface AwsGuarddutyDetectorArgsDatasourcesS3Logs {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsDatasources {
  kubernetes: AwsGuarddutyDetectorArgsDatasourcesKubernetes;
  malware_protection: AwsGuarddutyDetectorArgsDatasourcesMalwareProtection;
  s3_logs: AwsGuarddutyDetectorArgsDatasourcesS3Logs;
}
export interface AwsGuarddutyDetectorArgs {
  enable?: boolean;
  tags?: {
    [key: string]: string;
  };
  datasources: AwsGuarddutyDetectorArgsDatasources;
}
export class aws_guardduty_detector extends TerraformResource {
  readonly account_id!: string;
  readonly arn!: string;
  readonly finding_publishing_frequency?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyDetectorArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_detector");
  }
}