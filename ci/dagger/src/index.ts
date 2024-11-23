/**
 * A generated module for Ci functions
 *
 * This module has been generated via dagger init and serves as a reference to
 * basic module structure as you get started with Dagger.
 *
 * Two functions have been pre-created. You can modify, delete, or add to them,
 * as needed. They demonstrate usage of arguments and return types using simple
 * echo and grep commands. The functions can be called from the dagger CLI or
 * from one of the SDKs.
 *
 * The first line in this comment block is a short description line and the
 * rest is a long description with more detail on the module's purpose or usage,
 * if appropriate. All modules should have a short description.
 */
import { dag, Directory, object, func, Secret } from "@dagger.io/dagger"

const username = "mheers"

const baseImage = "mltframework/melt:v7.28.0"
const targetImage = "docker.io/mheers/melt:v7.28.0"

const fontPackages = ["fonts-noto", "ttf-mscorefonts-installer", "fonts-dejavu", "fonts-liberation", "fonts-crosextra-carlito", "fonts-crosextra-caladea", "fonts-freefont-ttf"]

@object()
export class Ci {
  @func()
  async buildAndPushImage(src: Directory, registryToken: Secret): Promise<string> {
    return dag.container().from(baseImage)
      .withExec(["apt-get", "update"])
      .withExec(["apt-get", "install", "-y", ...fontPackages])
      .withEntrypoint(["xvfb-run", "-a", "melt"])
      .withRegistryAuth(targetImage, username, registryToken)
      .publish(targetImage)
  }
}
