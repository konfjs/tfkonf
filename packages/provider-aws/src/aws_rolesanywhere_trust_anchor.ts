import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationSettings {}
export interface SourceData {
  acm_pca_arn?: string;
  x509_certificate_data?: string;
}
export interface Source {
  source_type: string;
  source_data: SourceData;
}
export interface AwsRolesanywhereTrustAnchorArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  notification_settings: NotificationSettings;
  source: Source;
}
export class aws_rolesanywhere_trust_anchor extends TerraformResource {
  readonly arn!: string;
  readonly enabled?: boolean;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRolesanywhereTrustAnchorArgs) {
    super(config, "resource", args, resourceName, "aws_rolesanywhere_trust_anchor");
  }
}