import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaLicenseAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGrafanaLicenseAssociationArgs {
  grafana_token?: string;
  license_type: string;
  workspace_id: string;
  timeouts?: AwsGrafanaLicenseAssociationArgsTimeouts;
}

export class aws_grafana_license_association extends TerraformResource {
  readonly free_trial_expiration!: string;
  readonly id?: string;
  readonly license_expiration!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaLicenseAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_license_association");
  }
}
