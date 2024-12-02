import { AzurermBackend } from './backends/azurerm.js';
import { ConsulBackend } from './backends/consul.js';
import { CosBackend } from './backends/cos.js';
import { GcsBackend } from './backends/gcs.js';
import { HttpBackend } from './backends/http.js';
import { KubernetesBackend } from './backends/kubernetes.js';
import { LocalBackend } from './backends/local.js';
import { OssBackend } from './backends/oss.js';
import { PgBackend } from './backends/pg.js';
import { RemoteBackend } from './backends/remote.js';
import { S3Backend } from './backends/s3.js';

export type BackendConfig = {
    local: LocalBackend;
    remote: RemoteBackend;
    azurerm: AzurermBackend;
    consul: ConsulBackend;
    cos: CosBackend;
    gcs: GcsBackend;
    http: HttpBackend;
    kubernetes: KubernetesBackend;
    oss: OssBackend;
    pg: PgBackend;
    s3: S3Backend;
};
