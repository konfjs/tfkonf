import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessSnapshotArgs {
  namespace_name: string;
  retention_period?: number;
  snapshot_name: string;
}

export class aws_redshiftserverless_snapshot extends TerraformResource {
  readonly accounts_with_provisioned_restore_access!: string[];
  readonly accounts_with_restore_access!: string[];
  readonly admin_username!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly namespace_arn!: string;
  readonly owner_account!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_snapshot");
  }
}
