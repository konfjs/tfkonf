import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyDetectorArgsdatasourceskubernetesAuditLogs {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsdatasourceskubernetes {
  audit_logs: AwsGuarddutyDetectorArgsdatasourceskubernetesAuditLogs;
}
export interface AwsGuarddutyDetectorArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindings {
  ebs_volumes: AwsGuarddutyDetectorArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}
export interface AwsGuarddutyDetectorArgsdatasourcesMalwareProtection {
  scan_ec2_instance_with_findings: AwsGuarddutyDetectorArgsdatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}
export interface AwsGuarddutyDetectorArgsdatasourcesS3Logs {
  enable: boolean;
}
export interface AwsGuarddutyDetectorArgsdatasources {
  kubernetes: AwsGuarddutyDetectorArgsdatasourceskubernetes;
  malware_protection: AwsGuarddutyDetectorArgsdatasourcesMalwareProtection;
  s3_logs: AwsGuarddutyDetectorArgsdatasourcesS3Logs;
}
export interface AwsGuarddutyDetectorArgs {
  enable?: boolean;
  tags?: {
    [key: string]: string;
  };
  datasources: AwsGuarddutyDetectorArgsdatasources;
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