import { TerraformConfig, TerraformResource } from "tfs";
export interface AddHeaderAction {
  header_name: string;
  header_value: string;
  position: number;
}
export interface BounceAction {
  message: string;
  position: number;
  sender: string;
  smtp_reply_code: string;
  status_code?: string;
  topic_arn?: string;
}
export interface LambdaAction {
  function_arn: string;
  invocation_type?: string;
  position: number;
  topic_arn?: string;
}
export interface S3Action {
  bucket_name: string;
  iam_role_arn?: string;
  kms_key_arn?: string;
  object_key_prefix?: string;
  position: number;
  topic_arn?: string;
}
export interface SnsAction {
  encoding?: string;
  position: number;
  topic_arn: string;
}
export interface StopAction {
  position: number;
  scope: string;
  topic_arn?: string;
}
export interface WorkmailAction {
  organization_arn: string;
  position: number;
  topic_arn?: string;
}
export interface AwsSesReceiptRuleArgs {
  after?: string;
  enabled?: boolean;
  name: string;
  recipients?: string[];
  rule_set_name: string;
  scan_enabled?: boolean;
  add_header_action: AddHeaderAction;
  bounce_action: BounceAction;
  lambda_action: LambdaAction;
  s3_action: S3Action;
  sns_action: SnsAction;
  stop_action: StopAction;
  workmail_action: WorkmailAction;
}
export class aws_ses_receipt_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tls_policy?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesReceiptRuleArgs) {
    super(config, "resource", args, resourceName, "aws_ses_receipt_rule");
  }
}