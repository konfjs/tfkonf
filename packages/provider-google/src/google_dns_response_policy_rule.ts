import { TerraformConfig, TerraformResource } from "tfs";
export interface LocalDatas {
  name: string;
  rrdatas?: string[];
  ttl?: number;
  type: string;
}
export interface LocalData {
  local_datas: LocalDatas;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDnsResponsePolicyRuleArgs {
  dns_name: string;
  response_policy: string;
  rule_name: string;
  local_data: LocalData;
  timeouts: Timeouts;
}
export class google_dns_response_policy_rule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsResponsePolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_dns_response_policy_rule");
  }
}